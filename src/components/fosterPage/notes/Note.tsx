import React from "react";
import { GiHighGrass } from 'react-icons/gi';
import { TbScaleOutline, TbMeat, TbNotes } from 'react-icons/tb';
import { FaRegCommentDots } from "react-icons/fa";
import { Stack } from "react-bootstrap";
import { categories } from "../../../utilities/helper";
import AppetiteNotes from "./AppetiteNotes";
import BehaviorNotes from "./BehaviorNotes";
import OthersNotes from "./OthersNotes";
import PottyNotes from "./PottyNotes";
import WeightNotes from "./WeightNotes";


const noteComponents:any = {
  Potty: PottyNotes,
  Weight: WeightNotes,
  Appetite: AppetiteNotes,
  Behavior: BehaviorNotes,
  Others: OthersNotes
}

const iconComponents:any = {
  Potty: GiHighGrass,
  Weight: TbScaleOutline,
  Appetite: TbMeat,
  Behavior: TbNotes,
  Others: FaRegCommentDots
}

interface Props {
  note: string
}

const Note:React.FC<Props> = ({ note }) => {
  const Note = noteComponents[note];

  return (
    <div>
      <h5>Note</h5>
      <Note />
    </div>
  )
}

export default Note;