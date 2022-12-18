import "./LastUpdated.css";

const LastUpdated = (props: { lastUpdated: number }) => {
  const lastUpdated = new Date(props.lastUpdated).toUTCString();

  return (
    <span className="LastUpdated">Device list last updated {lastUpdated}</span>
  );
};

export default LastUpdated;
