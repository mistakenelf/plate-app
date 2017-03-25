import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
} from "material-ui/Card";
import React, { PropTypes } from "react";

import CheckCircle from "material-ui/svg-icons/action/check-circle";
import FlatButton from "material-ui/FlatButton";
import Link from "next/link";
import RemovePlateDialog from "./RemovePlateDialog";

const Plate = props => {
  const {
    name,
    plateId,
    description,
    removePlate,
    refetch,
    cardImage,
    removePlateDialogOpen,
    openRemovePlateDialog,
    closeRemovePlateDialog,
    completed,
    completePlate
  } = props;

  const markPlateComplete = (plateId, completed, completePlate, refetch) => {
    completePlate(plateId, !completed);
    refetch();
  };

  return (
    <Card style={{ borderRadius: 5 }}>
      {completed &&
        <CardHeader
          title={name + " is completed!"}
          subtitle="Subtitle"
          avatar={<CheckCircle style={{ color: "green" }} />}
        />}
      <CardMedia
        overlay={<CardTitle title={name} />}
        onTouchTap={() =>
          markPlateComplete(plateId, completed, completePlate, refetch)}
      >
        <img
          style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }}
          src={cardImage}
          width="208"
          height="214"
        />
      </CardMedia>
      <CardText>
        {description}
      </CardText>
      <CardActions>
        <FlatButton
          label="Wash Plate"
          secondary
          onTouchTap={() => openRemovePlateDialog()}
        />
        <Link prefetch href={`/platefiller?id=${plateId}`}>
          <a><FlatButton primary label="Fill Plate" /></a>
        </Link>
      </CardActions>
      <RemovePlateDialog
        removePlateDialogOpen={removePlateDialogOpen}
        closeRemovePlateDialog={closeRemovePlateDialog}
        removePlate={removePlate}
        refetch={refetch}
        plateId={plateId}
      />
    </Card>
  );
};

Plate.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  plateId: PropTypes.string,
  removePlate: PropTypes.func,
  refetch: PropTypes.func,
  cardImage: PropTypes.string,
  removePlateDialogOpen: PropTypes.bool,
  openRemovePlateDialog: PropTypes.func,
  closeRemovePlateDialog: PropTypes.func,
  completed: PropTypes.bool,
  completePlate: PropTypes.func
};

export default Plate;
