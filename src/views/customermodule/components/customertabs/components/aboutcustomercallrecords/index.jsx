import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  Flex,
  Text,
  IconButton,
  Spacer,
  Tooltip,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { MdPlayArrow, MdPause, MdStop } from 'react-icons/md';

const CallRecordingList = ({ recordings }) => {
  const [currentRecording, setCurrentRecording] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  let audioElement = null;

  const handlePlayPause = (recording) => {
    if (currentRecording === recording && isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      if (currentRecording !== recording) {
        setCurrentRecording(recording);
        setIsPlaying(true);
        setCurrentTime(0);
      } else {
        setIsPlaying(true);
      }
      audioElement.play();
    }
  };

  const handleStop = () => {
    audioElement.pause();
    audioElement.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioElement.currentTime);
  };

  const handleSliderChange = (value) => {
    audioElement.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <Box mt={5}>
      <audio
        ref={(element) => (audioElement = element)}
        src={currentRecording ? currentRecording.url : null}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleStop}
      />
      <List spacing={3}>
        {recordings.map((recording, index) => (
          <ListItem key={index}>
            <Flex alignItems="center">
              <IconButton
                icon={currentRecording === recording && isPlaying ? <MdPause /> : <MdPlayArrow />}
                onClick={() => handlePlayPause(recording)}
                aria-label={isPlaying ? 'Pause Recording' : 'Play Recording'}
              />
              <Text ml={2}>{recording.title}</Text>
              <Spacer />
              <Tooltip label="Stop">
                <IconButton
                  icon={<MdStop />}
                  onClick={handleStop}
                  aria-label="Stop Recording"
                />
              </Tooltip>
            </Flex>
            <Slider aria-label="progress-slider" value={currentTime}  onChange={handleSliderChange} mt={3}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CallRecordingList;