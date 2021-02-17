import { useLoading, Audio } from "@agney/react-loading";

const Loading = () => {
  //   const { containerProps, indicatorEl } = useLoading({
  //     loading: true,
  //     indicator: <Audio width="50" />,
  //   });

  return <Audio width="50" style={{ align: "center" }} />;
};

export default Loading;
