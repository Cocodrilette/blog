import styles from "../../styles/Text.module.css";

export interface PageTitleProps {
  content: string;
}

export default function PageTitle({ content }: PageTitleProps) {
  return (
    <h1
      id={styles.pageTitle}
      className="md:text-3xl text-xl italic drop-shadow-xl"
    >
      {content}
    </h1>
  );
}
