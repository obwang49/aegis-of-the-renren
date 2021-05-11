/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

import ProfilePageCardRefreshButton from "./ProfilePageCardRefreshButton.react";

type Props = {
  action: React.Node,
  avatarIcon: React.Node,
  onRefresh: () => void,
  subHeader: string,
  title: string,
};

export default function ProfilePageInfoCard({
  action,
  avatarIcon,
  onRefresh,
  subHeader,
  title,
}: Props) {
  return (
    <Card>
      <CardHeader
        action={
          <>
            {action}
            <ProfilePageCardRefreshButton onClick={onRefresh} />
          </>
        }
        avatar={<Avatar>{avatarIcon}</Avatar>}
        subheader={
          <Typography variant="h5">
            {subHeader ?? <Skeleton animation="wave" width="40%" />}
          </Typography>
        }
        title={<Typography color="textSecondary">{title}</Typography>}
      />
    </Card>
  );
}
