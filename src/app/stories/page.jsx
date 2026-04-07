import StoryCard from '@/components/StoryCard'
import Title from '@/components/Title'
import React from 'react'

const Stories = () => {
    const devStories=[
  {
    "id": 1,
    "name": "Rahim Ahmed",
    "designation": "Frontend Developer",
    "company": "TechNova",
    "skills": ["React", "Next.js", "Tailwind CSS"],
    "story": "Started from zero, learned React and now building scalable UI systems.",
    "about": "Passionate about UI/UX and modern web technologies.",
    "image": "https://i.pravatar.cc/150?img=1"
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "designation": "Backend Developer",
    "company": "CodeCrafters",
    "skills": ["Node.js", "Express", "MongoDB"],
    "story": "Loved solving problems, backend gave me the power to build logic.",
    "about": "Enjoys building APIs and database architecture.",
    "image": "https://i.pravatar.cc/150?img=2"
  },
  {
    "id": 3,
    "name": "Tanvir Hasan",
    "designation": "Full Stack Developer",
    "company": "DevHub",
    "skills": ["MERN", "TypeScript"],
    "story": "From CSE student to full stack dev with real-world projects.",
    "about": "Focused on scalable and clean code practices.",
    "image": "https://i.pravatar.cc/150?img=3"
  },
  {
    "id": 4,
    "name": "Ayesha Akter",
    "designation": "UI/UX Designer",
    "company": "DesignPro",
    "skills": ["Figma", "Adobe XD"],
    "story": "Turned creativity into career with design thinking.",
    "about": "Design lover and user experience enthusiast.",
    "image": "https://i.pravatar.cc/150?img=4"
  },
  {
    "id": 5,
    "name": "Sakib Hossain",
    "designation": "Mobile App Developer",
    "company": "Appify",
    "skills": ["Flutter", "Dart"],
    "story": "Built cross-platform apps and launched on Play Store.",
    "about": "Focused on mobile-first solutions.",
    "image": "https://i.pravatar.cc/150?img=5"
  },
  {
    "id": 6,
    "name": "Mehedi Hasan",
    "designation": "DevOps Engineer",
    "company": "CloudNet",
    "skills": ["Docker", "AWS", "CI/CD"],
    "story": "Automated deployments and optimized infrastructure.",
    "about": "Loves cloud and automation.",
    "image": "https://i.pravatar.cc/150?img=6"
  },
  {
    "id": 7,
    "name": "Farhana Rahman",
    "designation": "Data Scientist",
    "company": "DataMind",
    "skills": ["Python", "Pandas", "ML"],
    "story": "Analyzed data to generate business insights.",
    "about": "Data-driven decision maker.",
    "image": "https://i.pravatar.cc/150?img=7"
  },
  {
    "id": 8,
    "name": "Jahid Islam",
    "designation": "AI Engineer",
    "company": "AI Labs",
    "skills": ["TensorFlow", "PyTorch"],
    "story": "Built AI models solving real-world problems.",
    "about": "Interested in deep learning and NLP.",
    "image": "https://i.pravatar.cc/150?img=8"
  },
  {
    "id": 9,
    "name": "Rafiul Karim",
    "designation": "Cyber Security Analyst",
    "company": "SecureIT",
    "skills": ["Ethical Hacking", "Network Security"],
    "story": "Protecting systems from cyber threats.",
    "about": "Security enthusiast.",
    "image": "https://i.pravatar.cc/150?img=9"
  },
  {
    "id": 10,
    "name": "Sumaiya Akter",
    "designation": "Software Engineer",
    "company": "SoftEdge",
    "skills": ["Java", "Spring Boot"],
    "story": "Built enterprise-level applications.",
    "about": "Enjoys backend systems.",
    "image": "https://i.pravatar.cc/150?img=10"
  },
  {
    "id": 11,
    "name": "Imran Hossain",
    "designation": "Game Developer",
    "company": "GameZone",
    "skills": ["Unity", "C#"],
    "story": "Turned passion for games into profession.",
    "about": "Creative and technical thinker.",
    "image": "https://i.pravatar.cc/150?img=11"
  },
  {
    "id": 12,
    "name": "Tania Sultana",
    "designation": "QA Engineer",
    "company": "TestLab",
    "skills": ["Manual Testing", "Automation"],
    "story": "Ensuring software quality through testing.",
    "about": "Detail-oriented and analytical.",
    "image": "https://i.pravatar.cc/150?img=12"
  },
  {
    "id": 13,
    "name": "Arif Mahmud",
    "designation": "Cloud Engineer",
    "company": "Cloudify",
    "skills": ["Azure", "AWS"],
    "story": "Managing scalable cloud infrastructure.",
    "about": "Cloud computing expert.",
    "image": "https://i.pravatar.cc/150?img=13"
  },
  {
    "id": 14,
    "name": "Mitu Das",
    "designation": "Product Manager",
    "company": "InnovateX",
    "skills": ["Agile", "Scrum"],
    "story": "Bridging business and tech teams.",
    "about": "Leadership and planning skills.",
    "image": "https://i.pravatar.cc/150?img=14"
  },
  {
    "id": 15,
    "name": "Hasan Ali",
    "designation": "Blockchain Developer",
    "company": "CryptoTech",
    "skills": ["Solidity", "Web3"],
    "story": "Building decentralized applications.",
    "about": "Blockchain enthusiast.",
    "image": "https://i.pravatar.cc/150?img=15"
  }
]
  return (
    <div>
      <Title>Explore Stories of Developers</Title>
      <div>
        {
            devStories.map((story)=>
               <StoryCard key={story.id} story={story}></StoryCard>
            )
        }
      </div>
    </div>
  )
}

export default Stories
