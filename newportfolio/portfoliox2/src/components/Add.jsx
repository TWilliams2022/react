import { Avatar, Box, Fab, Modal, Stack, styled, TextField, Tooltip, Typography} from '@mui/material';
import React, { useState } from 'react'
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Add = () => {
const [open, setOpen] = useState(false)

const MyModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const MyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 5,
          left: { xs: "calc(50% - 25px )", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddCircleIcon />
        </Fab>
      </Tooltip>
      <MyModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={280}
          height={140}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            marginBottom={-1}
            marginTop={-1}
            color="gray"
            textAlign="center"
            variant="h6"
          >
            Create New Post
          </Typography>
          <MyBox>
            <Avatar
              alt="Tyreik"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCd_ZhiQm-l0ikK2hPPBzytJRD-jeOcKMMA&usqp=CAU"
            />
            <Typography marginLeft={1} variant="span" fontWeight={500}>
              Tyreik Williams
            </Typography>
          </MyBox>
          <TextField
            marginBottom={1}
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="Any good news?"
            variant="standard"
          />
          <Stack direction="row" gap={1}></Stack>
        </Box>
      </MyModal>
    </>
  );
}

export default Add