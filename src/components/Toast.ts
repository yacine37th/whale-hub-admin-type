import { toast } from "react-toastify";

export const toastSuccess = (text: string): void => {
  // "Successfully user accepted!"
  toast.success(`${text}`, {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const toastError = (text: string): void => {
  // "Successfully user accepted!"
  toast.error(`${text}`, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const toastWarning = (text: string): void => {
  toast.warning(`${text}`, {
    position: toast.POSITION.TOP_LEFT,
  });
};

export const toastInfos = (text: string): void => {
  toast.info(`${text}`, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};
