import { FaPython, FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';

export default function Skills() {
  return (
    <section className="p-10 bg-white text-textDark">
      <h2 className="text-3xl font-bold">My Skills</h2>
      <div className="flex gap-8 text-4xl mt-6">
        <FaPython className="text-secondary" />
        <FaReact className="text-secondary" />
        <FaNodeJs className="text-secondary" />
        <FaAws className="text-secondary" />
        <FaDocker className="text-secondary" />
      </div>
    </section>
  );
}
