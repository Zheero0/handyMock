const conversations = [
  {
    id: 1,
    participants: ["You", "Nail Tech"],
    preview: "Yes, that's correct. I'll see you on Friday...",
    messages: [
      {
        id: 1,
        text: "Hey, are you still interested in a nail tech?",
        sender: "me",
      },
      {
        id: 2,
        text: "Yes, I am! Are you free on Friday 27th?",
        sender: "other",
      },
      { id: 3, text: "Yes, I am. What time were you thinking?", sender: "me" },
      { id: 4, text: "2pm", sender: "other" },
      {
        id: 5,
        text: "2pm works great for me. I'll book you in.",
        sender: "me",
      },
      { id: 6, text: "It was £40 you charge, right?", sender: "other" },
      {
        id: 7,
        text: "Yes, that's correct. I'll see you on Friday 27th, my salon's address is 123 Blvd Street M12 3AB.",
        sender: "me",
      },
      { id: 8, text: "Thank you, see you Friday!", sender: "other" },
    ],
  },
  {
    id: 2,
    participants: ["You", "Photographer"],
    preview: "3pm is perfect, I'll book you in.",
    messages: [
      {
        id: 1,
        text: "Hi, are you still interested in a photographer for your event?",
        sender: "me",
      },
      {
        id: 2,
        text: "Yes, I am! Are you available on the 15th?",
        sender: "other",
      },
      {
        id: 3,
        text: "I can do the 15th. What time is your event?",
        sender: "me",
      },
      { id: 4, text: "It starts at 3pm. Would that work?", sender: "other" },
      { id: 5, text: "3pm is perfect, I'll book you in.", sender: "me" },
      {
        id: 6,
        text: "Great! How much will it cost for the day?",
        sender: "other",
      },
      {
        id: 7,
        text: "It's £200 for the full event coverage. I'll send the details.",
        sender: "me",
      },
      { id: 8, text: "Sounds good. See you on the 15th!", sender: "other" },
    ],
  },
  {
    id: 3,
    participants: ["You", "Plumber"],
    preview: "I'll be there at 10am to fix the leak.",
    messages: [
      {
        id: 1,
        text: "Hi, can you come take a look at the leak in my kitchen?",
        sender: "me",
      },
      {
        id: 2,
        text: "Sure, I can stop by tomorrow. Does 10am work for you?",
        sender: "other",
      },
      {
        id: 3,
        text: "Yes, 10am is perfect. How much do you charge for a callout?",
        sender: "me",
      },
      {
        id: 4,
        text: "It's £50 for the callout. I'll inspect the issue and let you know the total.",
        sender: "other",
      },
      { id: 5, text: "Great, I'll see you tomorrow.", sender: "me" },
      { id: 6, text: "See you then!", sender: "other" },
    ],
  },
  {
    id: 4,
    participants: ["You", "Gardener"],
    preview: "£30 for the lawn mowing, I'll be over at 3pm.",
    messages: [
      {
        id: 1,
        text: "Hey, are you available to mow my lawn this week?",
        sender: "me",
      },
      {
        id: 2,
        text: "Yes, I can come over on Friday. Does 3pm work for you?",
        sender: "other",
      },
      { id: 3, text: "Yes, 3pm works! How much do you charge?", sender: "me" },
      { id: 4, text: "It'll be £30 for the lawn mowing.", sender: "other" },
      { id: 5, text: "Perfect, I'll see you at 3pm then!", sender: "me" },
      { id: 6, text: "See you then!", sender: "other" },
    ],
  },
  {
    id: 5,
    participants: ["You", "Electrician"],
    preview: "I'll be there at 9am to install the lights.",
    messages: [
      {
        id: 1,
        text: "Hi, I need some help installing new lights. Can you come this week?",
        sender: "me",
      },
      {
        id: 2,
        text: "Sure, I can come on Thursday morning. Does 9am work?",
        sender: "other",
      },
      { id: 3, text: "Yes, 9am is fine. How much will it cost?", sender: "me" },
      { id: 4, text: "It'll be £75 for the installation.", sender: "other" },
      { id: 5, text: "Great, I'll see you on Thursday at 9am.", sender: "me" },
      { id: 6, text: "See you then!", sender: "other" },
    ],
  },
];
