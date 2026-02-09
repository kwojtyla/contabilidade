import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  CloseButton,
  Iframe,
  Overlay,
  Video,
  VideoWrapper,
} from "./video-lightbox.styles";

interface VideoLightboxProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]+)/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
    }
  }

  return null;
}

export function VideoLightbox({ src, isOpen, onClose }: VideoLightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const embedUrl = getYouTubeEmbedUrl(src);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <CloseButton onClick={onClose} aria-label="Fechar vídeo">
        ✕
      </CloseButton>
      <VideoWrapper>
        {embedUrl ? (
          <Iframe
            src={embedUrl}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Video src={src} controls autoPlay />
        )}
      </VideoWrapper>
    </Overlay>,
    document.body,
  );
}
