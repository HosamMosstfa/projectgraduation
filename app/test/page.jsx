const page = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData);
    console.log("hello");
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>send</button>
      </form>
    </div>
  );
};

export default page;
