# Ostalb Hackathon

## 2022

### General information

The Ostalb Hackathon 2022, under the motto "From the region - For the region", provided a platform for interdisciplinary teams to solve challenges faced by companies in the region in 48 hours. This hands-on event aimed to develop creative solutions to real-world problems using creativity methods and design thinking.

#### Challenge:

We decided to work on Voith's "Green Production" challenge.
The task was very general: To make production more environmentally friendly.
As a starting point, we were given machine data such as capacity utilization and power consumption.

### Our solution

Our idea was to design the machine's scheduling in such a way that the machine's electricity consumption matches the production of the company's own photovoltaic plant.
If the electricity produced is consumed directly, this has the advantage of minimizing charging and conversion losses when charging a battery storage system.
In addition, you can take into account not only your own electricity production, but also the current electricity mix and thus reduce CO2 emissions.

Scheduling creates a daily plan of when which part is to be produced on which machine.
For our solution, we developed a prototype in Python with a front end in React.
First of all, we used weather data to create a solar power forecast.
For the prototype, we assumed that the electricity mix would behave in the same way.
We then designed the detailed planning so that energy-intensive parts are manufactured when a lot of solar power is available.

### Perspective

As we did not receive any CAD data, we were unable to analyze the files.
For the idea to work properly, we would have to analyze the machine commands and create a forecast of the power consumption for each part.
We used dummy data instead.
In addition, our prototype had no interfaces.
For the productive use of such a solution, interfaces to the machines as well as software interfaces, e.g. to ERP systems, would have to be provided.

### Win

We were able to convince the jury with our solution and won this challenge.
In addition to the prize money, we were invited by Voith to a factory tour.
