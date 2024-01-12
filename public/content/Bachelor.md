# Bachelors Thesis

## Projektraum Reger GmbH

### Summary

The goal of this work was the development of a prototype of a robot arm for medical applications. This includes the design and construction, as well as the development of the firmware. This work was written in the engineering office "Projektraum Reger GmbH" and was commissioned by a customer. The robot arm was made from commercially available parts, mostly from the hobby sector, as well as 3D printed parts. Both FDM and MSLA 3D printing were used. A Nema 17 motor with a 1:100 planetary gearbox is used as the drive in each axis. TMC5160 are used as motor drivers, which are controlled by an ESP32 via SPI. The developed firmware for the ESP is able to calculate the joint positions for all joints using inverse kinematics from a target position given by the user. It was developed in C++ and uses the ESP-IDF framework provided by the manufacturer of the ESP. Two different joints were developed to achieve the 5 degrees of freedom required for the intended application. The Thesis scored a 1.0 (4.0 GPA).

### Key Achievements:

- **Feasibility Analysis and Client Collaboration:** Part of the work was not only the technical implementation, but also finding solutions together with the customer in the first place. This also included explaining ideas to the customer using simplified 3D models.

- **3D Modeling and Rapid Prototyping:** Utilized Autodesk Fusion 360 for 3D modeling and employed both FFF and MSLA 3D printing techniques for prototyping and thus work out the strenghts and weaknesses of different 3D printing processes and the corresponding requirements for the 3D Model.

- **Electronics and Control System Design:** Development of the electronics and firmware for controlling the actuators from scratch, including the determination of the inverse kinematic.
