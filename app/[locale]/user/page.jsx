import { useMessages } from "next-intl";

const page = () => {
  const messages = useMessages();

  return (
    <div><h1>{messages?.TEST?.VAL}</h1></div>
  )
}

export default page