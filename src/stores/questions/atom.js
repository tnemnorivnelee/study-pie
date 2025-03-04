import { atom } from "jotai";

const questionsState = atom([
  {
    title: "질문1",
    desc: "설명1",
    type: "text",
    required: false,
    options: {
      placeholder: "placeholder 입니다.",
    },
  },
  {
    title: "질문2",
    desc: "설명2",
    type: "textarea",
    required: true,
    options: {
      placeholder: "placeholder 입니다.",
    },
  },
  {
    title: "질문3",
    desc: "설명3",
    type: "select",
    required: true,
    options: {
      items: ["답변1", "답변2", "답변3", "답변4", "답변5"],
    },
  },
]);

export default questionsState;
