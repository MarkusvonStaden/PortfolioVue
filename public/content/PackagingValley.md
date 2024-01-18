# Packaging Valley

## Makeathon 2020, 2021, 2022

### Packaging Valley

Packaging Valley is an alliance of regional packaging companies.
In 2020, they organized the **Packaging Valley Makeathon** for the first time.
The participants were able to work on different tasks at the companies' locations.

### Digital machine logbook, 2020

Currently, interventions due to machine malfunctions are recorded manually in a machine logbook.
This is very error-prone, time-consuming and therefore not suitable for process optimization.
The task was to improve this procedure.

A fellow student and I had the idea of automatically recording, categorizing and logging interventions in the machine.
To do this, we trained a model to recognize different tools.
We were also able to recognize from the camera image which area of the machine the operator was in.
Due to the limited time of less than 2 days, we implemented the division of the work areas using ARUCO tags.
Using this data, we were able to distinguish between 2 cases.

Syntegon liked this idea and pursued it internally and applied for a patent. (See patents section)

### Optical monitoring of vital signs, 2021

In 2021, the task was very open, we were given a tour of the production halls and asked to come up with ideas ourselves.
Our team decided to increase occupational safety.
To do this, we wanted to monitor the vital signs of the workers so that we could take preventive action.
We found an open source project to record the heart rate via webcam.
The project was somewhat older and was not compatible with the current version of OpenCV.
We developed a solution for this problem. We also made our solution available to the developer of the project, who merged the pull request.

In addition, we found a project that makes it possible to detect the respiratory rate.
We combined these projects and developed a front end for visualization.
Finally, we tried to detect serious injuries.

### Automatic user authentication on machines, 2022

In 2022, we wanted to ensure that only authorized users can operate the machine.
Initially, we tried to perform authorization by voice recognition.
Due to the noise in production environments, we abandoned this approach.

Instead, we programmed an ESP32 to act as a Bluetooth beacon.
Using a Raspberry Pi to represent the machine, we evaluated the beacon's signal strength and ID to determine whether a user was in the workspace and, if so, whether they were authorized to operate the machine.
