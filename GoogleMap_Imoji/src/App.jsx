import { useState, useRef, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript, OverlayViewF } from "@react-google-maps/api";
import {
  Container,
  EmojiSelector,
  InputContainer,
  PhotoSelectionContainer,
  EmojiButton,
  InputField,
  PhotoUploadButton,
  CancelButton,
  PhotoPreview,
  SubmitButton,
  Balloon,
  Message, // 스타일 추가
} from "./component/styled.js";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.5665, // 서울 시청
  lng: 126.978,
};

const emojis = ["😊", "📍", "🏠", "🌟", "❤️", "⭐", "🐤"];

export default function App() {
  const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: VITE_GOOGLE_MAPS_API_KEY,
  });

  const [markers, setMarkers] = useState([]);
  const [draggingEmoji, setDraggingEmoji] = useState(null); // 드래그 중인 이모지 저장
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(null);
  const [isPhotoSelectionVisible, setIsPhotoSelectionVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 저장

  const mapContainerRef = useRef(null); // Google Map 컨테이너
  const mapRef = useRef(null); // Google Map 객체
  const overlayRef = useRef(null); // OverlayView 객체
  const inputRef = useRef(null); // 텍스트 입력창 참조

  useEffect(() => {
    if (mapRef.current) {
      const overlay = new window.google.maps.OverlayView();
      overlay.onAdd = () => {};
      overlay.draw = () => {};
      overlay.setMap(mapRef.current);
      overlayRef.current = overlay;
    }
  }, [mapRef.current]);

  useEffect(() => {
    if (activeMarkerIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeMarkerIndex]);

  const handleDragStart = (emoji) => () => {
    setDraggingEmoji(emoji);
    setIsDragging(true); // 드래그 상태 활성화
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // 드롭 가능하도록 설정
  };

  const handleDrop = (event) => {
    event.preventDefault();

    if (!draggingEmoji || !overlayRef.current) return;

    const mapBounds = mapContainerRef.current.getBoundingClientRect();
    const pixelPosition = {
      x: event.clientX - mapBounds.left,
      y: event.clientY - mapBounds.top,
    };

    const latLng = overlayRef.current.getProjection().fromContainerPixelToLatLng(pixelPosition);

    const newMarker = {
      position: { lat: latLng.lat(), lng: latLng.lng() },
      emoji: draggingEmoji,
      text: "",
      photo: null,
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    setActiveMarkerIndex(markers.length); // 새로 추가된 마커를 활성 상태로 설정
    setDraggingEmoji(null); // 드래그 상태 초기화
    setIsDragging(false); // 드래그 상태 비활성화
  };

  const handleMapClick = (event) => {
    if (event.placeId) {
      event.stop(); // Google Maps에서 클릭 이벤트 중지
    }
  };

  const handleTextChange = (event) => {
    const updatedMarkers = markers.map((marker, index) =>
      index === activeMarkerIndex ? { ...marker, text: event.target.value } : marker
    );
    setMarkers(updatedMarkers);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedMarkers = markers.map((marker, index) =>
          index === activeMarkerIndex ? { ...marker, photo: reader.result } : marker
        );
        setMarkers(updatedMarkers);
      };
      reader.readAsDataURL(file);
    }
    setIsPhotoSelectionVisible(false);
  };

  const handleSubmit = () => {
    setActiveMarkerIndex(null);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Container>
      <div
        ref={mapContainerRef}
        style={{ position: "relative", width: "100%", height: "100%" }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={18}
          onLoad={(map) => (mapRef.current = map)}
          onClick={handleMapClick}>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={{
                url: createEmojiCursor(marker.emoji),
                scaledSize: new window.google.maps.Size(50, 50),
              }}
              onClick={() => setActiveMarkerIndex(index)}
            />
          ))}

          {markers.map(
            (marker, index) =>
              marker.text && ( // 말풍선은 텍스트가 있을 때만 렌더링
                <OverlayViewF
                  key={`overlay-${index}`}
                  position={marker.position}
                  mapPaneName="overlayMouseTarget">
                  <Balloon>
                    {marker.photo && <PhotoPreview src={marker.photo} />}
                    {marker.text}
                  </Balloon>
                </OverlayViewF>
              )
          )}
        </GoogleMap>
      </div>

      <EmojiSelector>
        {emojis.map((emoji, index) => (
          <EmojiButton key={index} draggable onDragStart={handleDragStart(emoji)}>
            {emoji}
          </EmojiButton>
        ))}
      </EmojiSelector>

      {isDragging && (
        <Message style={{ pointerEvents: "none" }}>
          이모지를 드래그하여 원하는 위치에 놓아주세요.
        </Message>
      )}

      {activeMarkerIndex !== null && (
        <InputContainer>
          <InputField
            ref={inputRef}
            value={markers[activeMarkerIndex]?.text || ""}
            onChange={handleTextChange}
            placeholder="내용을 입력하세요..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <div style={{ display: "flex", gap: "10px" }}>
            <PhotoUploadButton onClick={() => setIsPhotoSelectionVisible(true)}>
              사진 선택
            </PhotoUploadButton>
            <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
          </div>
        </InputContainer>
      )}

      {isPhotoSelectionVisible && (
        <PhotoSelectionContainer>
          <label htmlFor="photo-upload">
            <PhotoUploadButton>사진 선택</PhotoUploadButton>
          </label>
          <CancelButton onClick={() => setIsPhotoSelectionVisible(false)}>취소</CancelButton>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handlePhotoUpload}
          />
        </PhotoSelectionContainer>
      )}
    </Container>
  );
}

function createEmojiCursor(emoji) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 64;
  canvas.height = 64;

  ctx.font = "48px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 32, 32);

  return canvas.toDataURL();
}
