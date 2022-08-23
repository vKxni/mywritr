import makeVisible from "./components/writer";
import deleteContent from "./components/writer";

export const visibleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.code === "Enter" && event.ctrlKey) {
    makeVisible();
  }
};

export const deleteKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.code === "Backspace" && event.ctrlKey) {
    deleteContent();
  }
};
