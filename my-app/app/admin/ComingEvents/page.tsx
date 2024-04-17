import React from "react";
import "../../globals.css";

export default function ComingEvents() {
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mg-5">
  {events.map((event) => (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-auto h-auto">
      <figure className="w-full h-64">
        <img className="w-full h-full object-cover" src={event.imageLink} alt="Event"/>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-700">{event.description}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Participate
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
    );
    }
    const events = [
        {
          title: "Conference on Neural Information Processing Systems (NeurIPS)",
          description: "A prestigious annual conference for presenting and discussing cutting-edge research in machine learning and artificial intelligence.",
          imageLink: "https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg?w=740&t=st=1713324166~exp=1713324766~hmac=71562643908f38017e633b0241e73aa40c4e932ebd74922476c463c452613a26"
        },
        {
          title: "ACM SIGGRAPH - Special Interest Group on Graphics",
          description: "A premier conference for computer graphics and interactive techniques, showcasing advancements in visual computing.",
          imageLink: "https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?w=740&t=st=1713324209~exp=1713324809~hmac=fda56d4eacc68fc715bc689a58960819ed165f9fcd0c21e67e7dc66015b3f811"
        },
        {
          title: "International Conference on Software Engineering (ICSE)",
          description: "The leading software engineering conference, focusing on research, development, and practical solutions for building high-quality software.",
          imageLink: "https://img.freepik.com/free-photo/3d-render-low-poly-plexus-design-network-communications_1048-14542.jpg?t=st=1713324672~exp=1713328272~hmac=c041db316a66bef2645e4e7351ff6e4890cb59e00fffdfb5438232f285eb2358&w=740"
        },
        {
          title: "VLDB Conference (Very Large Data Bases)",
          description: "A premier forum for research on data management, focusing on data storage, retrieval, analysis, and dissemination.",
          imageLink: "https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=740&t=st=1713324243~exp=1713324843~hmac=1afd064558695193410f3086919f001d8c39cb3397d64f5e01f4aba0028f6483"
        },
        {
          title: "USENIX Security Symposium",
          description: "A top conference on computer security, presenting research on system security, network security, and privacy.",
          imageLink: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg?w=740&t=st=1713324295~exp=1713324895~hmac=cc8cc23e5e9d9efb814711b46107b4d295b8687b9ec21a45f4102498fcc42b6e"
        },
        
      ];
      