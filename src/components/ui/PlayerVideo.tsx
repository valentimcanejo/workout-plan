import ReactPlayer from "react-player";

export default function PlayerVideo({ video }: { video: string }) {
  return (
    <ReactPlayer
      url={video}
      controls
      width={"100%"}
      config={{
        youtube: {
          embedOptions: {},
        },
      }}
    />
  );
}
