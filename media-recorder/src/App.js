import "./styles.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from "react";
import { Button, IconButton, Stack, Tooltip } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  console.log("sfasd", videoRef);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      console.log(videoRef.current.srcObject);
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return <video ref={videoRef} autoPlay controls />;
};

const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream
  } = useReactMediaRecorder({ video: true });
  const [isRecording, setIsRecording] = useState(false);
  const handleStartRecording = () => {
    setIsRecording(true);
    startRecording();
  };
  const handleStopRecording = () => {
    setIsRecording(false);
    stopRecording();
  };

  console.log(previewStream, mediaBlobUrl);

  return (
    <div className="main-container">
      <Stack
        spacing={2}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {isRecording ? (
          <>
            <div className="blink_me"> {status} </div>
            <Tooltip title="Stop Recording">
              <IconButton
                aria-label="delete"
                onClick={() => handleStopRecording()}
              >
                <StopIcon />
              </IconButton>
            </Tooltip>
            <VideoPreview stream={previewStream} />
          </>
        ) : (
          <>
            <Tooltip title="Click to Record">
              <IconButton
                aria-label="delete"
                onClick={() => handleStartRecording()}
              >
                <RadioButtonCheckedIcon />
              </IconButton>
            </Tooltip>
            <video className="video" src={mediaBlobUrl} controls autoPlay />
            <Button
              onClick={() => alert("upload somewhere")}
              disabled={!mediaBlobUrl && true}
            >
              Confirm Upload
            </Button>
          </>
        )}
      </Stack>
      <br />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <RecordView />
    </div>
  );
}
