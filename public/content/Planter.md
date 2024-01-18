# Smart Flowerpot

## IoT Flowerpot equipped with various sensors

### Idea

The main concept of the project is to develop a smart flower pot that is able to give the user feedback on the condition of the plant.
This signals when the plant needs water or requires further care. In addition, an associated website
will provide the user with relevant data and information about the plant.

### Objective

The flower pot should be able to record important parameters such as soil moisture, temperature, humidity, air pressure and brightness, which are crucial for the well-being of the plant. This data should be evaluated and the user should be informed visually if defined limit values are exceeded. To offer the user flexibility, the flower pot should have a rechargeable battery.

The flowerpot itself should be 3D printed. In order to generate as little waste as possible, as little support material as possible should be required. The electronics should be housed on a self-developed circuit board. Since an old smartphone battery is already available, the battery protection circuit should be analyzed in order to develop a corresponding circuit for battery management.

The sensor data should be recorded and transmitted at regular intervals. The rest of the time, the system should be in an energy-saving state.
The data should be available on a website. It should also be possible to upload firmware updates via the website. In order to come closer to a professional standard in the development process, mainly components from the professional sector and not from the hobby sector should be used.

### Implementation

- #### Flowerpot

  The design of the intelligent flower pot was divided into three main components in order to optimally realize the realize the desired functions optimally.

  The inner pot serves as the main container for the plant. A self-developed circuit board containing the microcontroller and the associated sensors is attached to its underside.

  The inner pot is placed inside the planter. The lower part of the planter is printed in transparent PLA. The purpose of this is to allow ambient light to hit the light sensor and the glow of the notification LED to be visible from the outside. In order to make the pot visually appealing, curved curved ribs were arranged on the outside.

  The coaster serves as the basis for the entire construction. It houses both the battery and the special circuit board for battery management. Through the use of pogo pins the circuit board in the inner pot with the necessary energy.

- #### Electronics and PCB

  The Espressif ESP32-C3 was used as the microcontroller, while the Vishay VEML3235 and a Bosch BME280 were used as sensors. A capacitive sensor based on an NE555 timer module was utilized to measure the humidity of the earth.
  To power the system, a circuit with the SPX3819 voltage converter was implemented, as this is particularly efficient.

  Since the whole system is powered by an old smartphone battery, a battery management build around the TP4056 was added.
  In Order so save battery, no additional components, as for example USB to UART converters were used.

  A circuit board with 2 layers was developed with these components. To inform the user that the plant needs attention, LEDs were placed on the outside of the board.

- #### Firmware

  The manufacturer's ESP-IDF framework was used to develop the firmware. The microcontroller establishes a connection to the Wi-Fi network. If no network is saved or the saved network cannot be reached, the microcontroller turns into an access point and provides a page for configuration.

  At the same time, the sensors are initialized and read out. If the measured values are outside a specified range, the LEDs are switched on.

  Once the connection is established, the sensor data is sent to the backend via HTTP Post together with the current firmware version. The response contains the limit values and weather an update is available.
  If the limit values have changed, they are saved in the NVS.

  The ESP then goes into deep sleep to save energy. This process is repeated every hour.

- #### Backend

  The backend was implemented in Python with FastAPI. It provides an endpoint for the sensor data. If the endpoint is accessed, the sensor data is appended to a JSON file together with a timestamp. The front end can be accessed up via another end point. To change the limits, endpoints are provided for both reading and writing. Finally, an endpoint is provided for uploading firmware updates. The backend then is dockerized.

- #### Frontend

  A simple front end was developed to visualize the sensor data. The progression of the individual sensors over time is visualized using GraphJS. To update the limits, a min and a max input field are available for each sensor. New firmware can also be provided via file upload.

[Github Firmware](https://github.com/MarkusvonStaden/TibS)  
[Github Backend](https://github.com/MarkusvonStaden/TibS_Backend)
