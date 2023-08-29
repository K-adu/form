import { useFormik } from 'formik';

export default function ImageUpload() {
  const formik = useFormik({
    initialValues: {
      photo: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form>
      <div>
        <label>upload File</label>
        <input type="file" name="photo" accept="image/*" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
