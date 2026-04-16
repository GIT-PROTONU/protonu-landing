
Automated Vision-Guided Deburring System

ABS Safety GmbH:
This project involved the complete automation of an ARKU deburring machine by integrating a dual-arm robotic cell. By leveraging advanced computer vision and collaborative robotics, the system transformed a manual loading process into a fully autonomous, "lights-out" operation capable of handling unstructured parts.

The system utilizes two Universal Robots UR10e cobots equipped with high-capacity vacuum grippers to manage the material flow. The integration focuses on two primary challenges: unstructured bin picking for input and precision placement for output.

1. Unstructured Input (Keyence 3D Vision)
To eliminate the need for precise part fixturing or organized stacking, the input stage uses a Keyence RB-1200 3D Vision System.

Scanning: The 3D sensor maps the pallet to identify individual workpieces within a disorganized pile.

Path Planning: The system calculates optimal grip points and collision-free trajectories for the first UR10e.

Result: High reliability in picking diverse metal geometries directly from raw pallets.

2. Automated Processing (ARKU Integration)
The UR10e places the raw parts onto the ARKU deburring machine’s conveyor. The automation maintains a consistent feed rate, ensuring optimal deburring and edge rounding quality without human intervention.

3. Precision Output (Keyence 2D Vision)
Upon exiting the machine, a second UR10e manages the discharge process.

Localization: A Keyence 2D vision camera identifies the exact position and orientation of the finished parts on the moving conveyor.

Palletizing: The robot picks the deburred parts and stacks them neatly for the next stage of production, ensuring organized output for downstream processes.

### Key Results
Increased Throughput: Continuous machine feeding reduces idle time between cycles.

Reduced Labor Costs: Fully autonomous operation allows operators to focus on high-value quality control tasks.

Flexibility: The combination of 3D vision and collaborative robots allows the cell to be quickly adapted for new part geometries without expensive mechanical re-tooling.

Enhanced Safety: The UR10e cobots provide a safe, fence-less environment that integrates seamlessly with existing shop floor workflows.

Kuka Robot programming 1
https://college.kuka.com/action?securedGetRequest_const=d6iLzXMaYyTk6SVUooYhDfgSsudR6WmRDUpiLhfMCBo
did this and passed with flying coulours was a lot of fun

Metaverse experience
https://www.gs1-germany.de/branchen-themen/metaverse/
did all the software and electonics also planning,testing and game development

NFGD
API rentman automation with local Powerbi database adn dashbaord for the warehouse, saves time packing and planning and admin with pulling data into powerbi

Upfront
This overview outlines the digital transformation of Upfront's logistics by migrating from manual workflows to Picqer. Key improvements include:

Automation: Automating picklist printing, stock mutations, and Slack notifications via Make.com.

Operational Efficiency: Implementing batch picking, FIFO, and zone-based warehouse management to streamline the 120+ daily orders.

Inventory Intelligence: Introducing structured workflows for B2B/B2C stock separation, assembly (bundles), and data-driven purchasing forecasts.

Error Reduction: Digitizing stock locations and replacing manual packing slip marking with automated logic.

This shift optimizes fulfillment speed, ensures inventory accuracy, and provides the scalability needed for business growth.