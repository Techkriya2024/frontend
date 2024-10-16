
const TeamSection = ({ title, teamMembers }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full my-8">
      <h1
        className={`font-kindle font-semibold self-start mb-4 text-[2.26rem] sm:text-[3rem] text-start w-full md:w-1/4 pl-5 pt-5 sm:pl-0 text-[#d6d6d6]`}
      >
        {title}
      </h1>
      <div className="w-full md:w-[50%] grid justify-center grid-cols-2 gap-12 py-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col  justify-center items-center h-50 w-50 mx-auto"
          >
            <img
              src={member.pic}
              alt={member.name}
              className="rounded-full filter grayscale w-max h-max"
              width={128}
              height={128}
            />
            <p
              className={`mt-4 text-[#d6d6d6]`}
            >
              {member.name}
            </p>
            <p className="text-center text-[#d6d6d6]">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
