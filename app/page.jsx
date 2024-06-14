import Link from "next/link";

// TODO
const Homepage = () => {
  return (
    <>
      <div className="dev1">
        <h1>Welcome to the dashboard</h1>
        <h2>lets go to login Page!</h2>
        <Link href="/login">Click Here!</Link>
      </div>
    </>
  );
};

export default Homepage;
