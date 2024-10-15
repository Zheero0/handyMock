const conversations = [
  {
    id: 1,
    participants: ["You", "Alice Johnson"],
    location: "Manchester",
    preview: "Looking forward to your birthday photos!",
    jobTitle: "Photographer",
    reviews: "8",
    description:
      "I need someone to take photos of me and my friends for my birthday.",
    imageUrl: "/images/alice.jpg",
    messages: [
      {
        id: 1,
        text: "Hi Alice, are you still available for my birthday photos?",
        sender: "me",
      },
      {
        id: 2,
        text: "Yes, I am! What time do you want to start?",
        sender: "other",
      },
      {
        id: 3,
        text: "I was thinking around 4 PM. Does that work?",
        sender: "me",
      },
      {
        id: 4,
        text: "Perfect! I'll be there at 4 PM.",
        sender: "other",
      },
    ],
  },
  {
    id: 2,
    participants: ["You", "Emily Davis"],
    location: "London",
    preview: "Excited to do your nails this weekend!",
    jobTitle: "Nail Tech",
    title: "Nail tech by tomomorrow!!",
    reviews: "19",
    description: "Looking for a nail technician for an event this weekend.",
    imageUrl: "/images/emily.jpg",
    messages: [
      {
        id: 1,
        text: "Hi Emily, are you available for nails this weekend?",
        sender: "me",
      },
      {
        id: 2,
        text: "Yes, I have openings! When would you like to come?",
        sender: "other",
      },
      {
        id: 3,
        text: "How about Saturday at 1 PM?",
        sender: "me",
      },
      {
        id: 4,
        text: "Sounds good! See you then!",
        sender: "other",
      },
    ],
  },
  {
    id: 3,
    participants: ["You", "Jake Smith"],
    location: "Birmingham",
    preview: "Ready to walk Rosie!",
    jobTitle: "Dog Walker/Sitter",
    title: "Dog walker for a week?",
    reviews: "87",
    description: "Need a dog walker for my pug Rosie twice a week.",
    location: "Birmingham",
    imageUrl: "/images/jake.jpg",
    messages: [
      {
        id: 1,
        text: "Hi Jake, I need help walking my dog.",
        sender: "me",
      },
      {
        id: 2,
        text: "Sure! When do you need me?loca",
        sender: "other",
      },
      {
        id: 3,
        text: "Can you come twice a week?",
        sender: "me",
      },
      {
        id: 4,
        text: "Absolutely! Let’s discuss the days.",
        sender: "other",
      },
    ],
  },
  {
    id: 4,
    participants: ["You", "Sophia Brown"],
    location: "Leeds",
    preview: "Let’s get started on your fitness goals!",
    jobTitle: "Personal Trainer",
    reviews: "5",
    description:
      "Looking for a certified PT for weight loss coaching for my wedding later this year. ",
    imageUrl: "/images/sophia.jpg",
    messages: [
      {
        id: 1,
        text: "Hi Sophia, I'm looking for a personal trainer.",
        sender: "me",
      },
      {
        id: 2,
        text: "Hi! I’d love to help. What are your goals?",
        sender: "other",
      },
      {
        id: 3,
        text: "I want to lose weight for my wedding.",
        sender: "me",
      },
      {
        id: 4,
        text: "That sounds great! Let’s set up a schedule.",
        sender: "other",
      },
    ],
  },
  {
    id: 5,
    participants: ["You", "James Wilson"],
    location: "Remote",
    preview: "Excited to help with your portfolio site!",
    jobTitle: "Web Developer",
    reviews: "37",
    description: "Need a web developer to help build my portfolio site.",
    imageUrl: "/images/james.jpg",
    messages: [
      {
        id: 1,
        text: "Hi James, I'm ready to start on my portfolio site.",
        sender: "me",
      },
      {
        id: 2,
        text: "Great! What do you have in mind?",
        sender: "other",
      },
      {
        id: 3,
        text: "I want a modern, minimalist design.",
        sender: "me",
      },
      {
        id: 4,
        text: "Perfect! Let’s discuss your ideas in detail.",
        sender: "other",
      },
    ],
  },
  {
    id: 6,
    participants: ["You", "Isabella Miller"],
    location: "London",
    preview: "Looking forward to creating your brand!",
    jobTitle: "Graphic Designer",
    reviews: "112",
    description:
      "Seeking a designer to create logos and branding for my startup.",
    imageUrl: "/images/isabella.jpg",
    messages: [
      {
        id: 1,
        text: "Hi Isabella, I need a logo designed for my startup.",
        sender: "me",
      },
      {
        id: 2,
        text: "Sure! Do you have any ideas in mind?",
        sender: "other",
      },
      {
        id: 3,
        text: "I like simple, elegant designs.",
        sender: "me",
      },
      {
        id: 4,
        text: "Great! Let’s brainstorm some concepts.",
        sender: "other",
      },
    ],
  },
  {
    id: 7,
    participants: ["You", "Michael Taylor"],
    location: "Liverpool",
    reviews: "29",
    preview: "Looking for a gardener to help with landscaping the backyard.",
    jobTitle: "Gardener for elderly",
    description:
      "Looking for a gardener to help with landscaping the backyard.",
    imageUrl: "/images/micheal.jpg", // Leave this blank to fill in later
    messages: [
      {
        id: 1,
        text: "Hi Michael, I saw your ad for gardening services. Can you help?",
        sender: "me",
      },
      {
        id: 2,
        text: "Absolutely! What kind of work do you need done?",
        sender: "other",
      },
      {
        id: 3,
        text: "Just some landscaping and upkeep for my elderly neighbor.",
        sender: "me",
      },
      {
        id: 4,
        text: "Sounds good! I can stop by this weekend.",
        sender: "other",
      },
    ],
  },
  {
    id: 8,
    participants: ["You", "Olivia Moore"],
    location: "Glasgow",
    preview: "Need a house cleaner for weekly visits to a 3-bedroom apartment.",
    jobTitle: "House cleaner weekly",
    description:
      "Need a house cleaner for weekly visits to a 3-bedroom apartment.",
    reviews: "46",
    imageUrl: "/images/olivia.jpg", // Leave this blank to fill in later
    messages: [
      {
        id: 1,
        text: "Hi Olivia, I'm interested in your cleaning service.",
        sender: "me",
      },
      {
        id: 2,
        text: "Great! When would you like me to come?",
        sender: "other",
      },
      {
        id: 3,
        text: "How about every Saturday morning?",
        sender: "me",
      },
      {
        id: 4,
        text: "Perfect! I’ll see you then.",
        sender: "other",
      },
    ],
  },
];

export default conversations;
