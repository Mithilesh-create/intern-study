import { useRef } from "react";

function MeetupForm(props) {
  const Titleref = useRef();
  const urlref = useRef();
  const placeref = useRef();
  const Descriptionref = useRef();
  // const [Data, setData] = useState({
  //   title: "",
  //   url: "",
  //   place: "",
  //   Description: "",
  // });
  // let name, value;
  // const handleChange = (e) => {
  //   value = e.target.value;
  //   name = e.target.name;
  //   setData({ ...Data, [name]: value });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      title: Titleref.current.value,
      url: urlref.current.value,
      place: placeref.current.value,
      desc: Descriptionref.current.value,
    };
    props.onSubmitData(Data);
  };
  return (
    <div className="FormArea">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            name="title"
            id="title"
            // onChange={handleChange}
            // value={Data.title}
            ref={Titleref}
          />
        </div>
        <div>
          <label htmlFor="url">Image Url</label>
          <input
            type="url"
            autoComplete="off"
            spellCheck="false"
            name="url"
            id="url"
            // onChange={handleChange}
            // value={Data.url}
            ref={urlref}
          />
        </div>
        <div>
          <label htmlFor="place">Meetup Place</label>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            name="place"
            id="place"
            // onChange={handleChange}
            // value={Data.place}
            ref={placeref}
          />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            type="text"
            name="Description"
            autoComplete="off"
            spellCheck="false"
            id="Description"
            rows="5"
            // onChange={handleChange}
            // value={Data.Description}
            ref={Descriptionref}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MeetupForm;
