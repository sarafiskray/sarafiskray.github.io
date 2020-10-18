# VTrans RFID Sign Management

<img src="images/vtranslogo.png?raw=true" width="100%" />

**Project Description:**
This project is a novel approach to transportation asset management, using RFID technology.  In this system, RFID tags are attached to traffic signs, and a survey vehicle with an in-vehicle RFID reader scans the tag data and communicates with a SQL database while driving.  This would happen periodically, say one to four times per year.  Additionally, the handheld reader is used to scan tags at a close range.  The handheld reader connects to an iPad via Bluetooth and pulls up relevant sign information from the database.  The combination of the in-vehicle and handheld readers creates a versatile system and easier asset management.  I was personally in charge of development of the handheld reader.

[Here is the poster](/pdf/vtransposter.pdf) that was presented by Dr. Byung Lee at the 2020 Transportation Research Board Conference in Washington, D.C.

## System Overview:

<img src="images/rfid_systemarch.png?raw=true">

Data is synchronized between the in-vehicle and handheld readers.  Both systems work offline, as much of Vermont is rural and without strong cell service.  Synchronization occurs upon reconnect.  Both readers can be used simultaneously without issues.

## Screenshots:

<img src="images/in_vehicle.png?raw=true">

In-Vehicle software, running on Windows Laptop.  Built completely in-house.

<img src="images/handheld.png?raw=true">

Handheld software, running on iPad.  Built by me using TracerPlus.


