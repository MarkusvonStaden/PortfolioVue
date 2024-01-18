# Board Detection

## Detect and save Text and images on Boards

### Summary

This project is a software to support hybrid teaching. It recognizes the blackboard. As soon as the writing is finished, this is automatically recognized and an image of the board is perspectively rectified and saved. A PDF with all the images is then uploaded to the learning platform.
This project began as a mechatronic project as part of the degree course and was subsequently funded by the university as part of the "Digitalization in teaching" project.

### Description

Python with OpenCV was used to realize this project.
Initially, the color was used to identify where the blackboard was located in the image. Later, the system was to be extended to whiteboards, so Aruco tags were then used. Posenet was then used to determine whether the board was covered by a person.
If this was not the case, the image was rectified in perspective and further processed so that black text is on a white background.
A metric was then used to assess how much the panel was covered. If this value has dropped significantly compared to the last image, it was assumed that the blackboard or whiteboard had been wiped and the last image was saved.
When the program was closed, all saved images were merged into a PDF and uploaded to the corresponding course via the API on the Canvas learning platform.
