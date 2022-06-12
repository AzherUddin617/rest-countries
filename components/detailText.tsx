
interface PropsType {
    title: string;
    text: string;
}

function DetailText({ title, text }: PropsType) {
  return (
    <p className="text-[0.95rem] space-x-1">
        {title}:
        <span className="text-[0.8rem] font-normal"> {text}</span>
    </p>
  )
}

export default DetailText