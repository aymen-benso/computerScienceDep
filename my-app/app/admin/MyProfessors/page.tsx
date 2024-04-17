import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

export default function MyProfessors() {
    const professors = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            avatar: "../use2.jpg",
            bio: "Professor of Computer Science",
            field: "CS"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            avatar: "../use3.jpeg",
            bio: "Assistant Professor of Computer Science",
            field: "CS"
        },
        {
            id: 3,
            name: "Michael Johnson",
            email: "michaeljohnson@example.com",
            avatar: "../use1.jpg",
            bio: "Associate Professor of Computer Science",
            field: "CS"
        }
    ];
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold p-5">My Professors</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {professors.map((professor) => (
            <div key={professor.id} className="bg-white shadow-md p-4">
                <img src={professor.avatar} alt={professor.name} className="w-24 h-24 rounded-full mx-auto" />
                <h2 className="text-xl font-bold text-center">{professor.name}</h2>
                <p className="text-center">{professor.email}</p>
                <p className="text-center">{professor.bio}</p>
                <p className="text-center">{professor.field}</p>
                <div className="flex justify-center gap-4">
                <BiLike />
                <BiChat />
                <BiShare />
                <BsThreeDotsVertical />
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}


