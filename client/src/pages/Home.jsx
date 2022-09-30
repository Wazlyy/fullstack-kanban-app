import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import boardApi from "../api/boardApi";
import { setBoards } from "../redux/features/boardSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const createBoard = async () => {
    setLoading(true);
    try {
      const res = await boardApi.create();
      dispatch(setBoards([res]));
      navigate(`/boards/${res.id}`);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingButton
        color="secondary"
        variant="outlined"
        onClick={createBoard}
        loading={loading}
      >
        Créé votre premier tableau !
      </LoadingButton>
    </Box>
  );
};

export default Home;
