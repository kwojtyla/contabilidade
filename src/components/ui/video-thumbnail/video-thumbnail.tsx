import { useState } from "react";
import { VideoLightbox } from "@/components/ui/video-lightbox";
import { Container, PlayButton, Thumbnail } from "./video-thumbnail.styles";
import { PlayIcon } from "@/assets/icons/play";

interface VideoThumbnailProps {
  src: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
}

export function VideoThumbnail({
  src,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
}: VideoThumbnailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container onClick={() => setIsOpen(true)}>
        <Thumbnail src={thumbnailSrc} alt={thumbnailAlt} />
        <PlayButton aria-label="Reproduzir vídeo">
          <PlayIcon />
        </PlayButton>
      </Container>

      <VideoLightbox
        src={src}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
