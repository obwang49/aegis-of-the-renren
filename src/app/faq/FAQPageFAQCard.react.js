/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

import type { FAQItem } from "./FAQPageFAQItems";

import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import { useValueByAppLanguage } from "../../utils/AppLanguageUtils";

const answerTextPrefix = Object.freeze({
  cn: "答：",
  eng: "A:",
});

const questionTextPrefix = Object.freeze({
  cn: "问：",
  eng: "Q:",
});

type Props = {
  faq: FAQItem,
};

export default function FAQPageFAQCard({ faq }: Props) {
  const theme = useTheme();

  const answerTextPrefixByLanguage = useValueByAppLanguage(answerTextPrefix);
  const questionTextPrefixByLanguage = useValueByAppLanguage(
    questionTextPrefix
  );

  const { answerText, questionText } = faq;
  const answerTextByLanguage = useValueByAppLanguage(answerText);
  const questionTextByLanguage = useValueByAppLanguage(questionText);

  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const toggleContentExpansion = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <QuestionAnswerIcon />
          </Avatar>
        }
        title={
          <Typography variant="h5" color="textSecondary">
            {`${questionTextPrefixByLanguage} ${questionTextByLanguage}`}
          </Typography>
        }
      />
      <Divider />
      <CardActionArea onClick={toggleContentExpansion}>
        <Collapse
          in={isContentExpanded}
          timeout="auto"
          collapsedHeight={theme.spacing(5)}
        >
          <CardContent>
            <Typography >
              {`${answerTextPrefixByLanguage} ${answerTextByLanguage}`}
            </Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}
