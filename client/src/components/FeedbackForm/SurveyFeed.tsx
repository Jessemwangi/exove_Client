import React from 'react';
import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import "survey-core/defaultV2.min.css";

interface IQuestions {
    type: string | boolean | number;
    name: string;
    title: string;
}
  
  interface SurveyFeedProps {
    elements: IQuestions[];
  }

  const SurveyFeed = ({ elements }: SurveyFeedProps) => {
      const json = {
          elements
        }
        console.log(json)
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    return (
      <Survey model={survey} />
    );
  };

export default SurveyFeed;