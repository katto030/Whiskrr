import React from "react";
import { GiHighGrass } from 'react-icons/gi';
import { TbScaleOutline, TbMeat, TbNotes } from 'react-icons/tb';
import { FaRegCommentDots } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import PottyNotes from "./notes/PottyNotes";
import WeightNotes from "./notes/WeightNotes";
import AppetiteNotes from "./notes/AppetiteNotes";
import BehaviorNotes from "./notes/BehaviorNotes";
import OthersNotes from "./notes/OthersNotes";
import { categories } from "../../utilities/helper";

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

const Notes = () => {
  return (
    <div>
      <h5>Notes</h5>
      <Stack gap={4}>
        {
          categories.map((category) => {
            const Note = noteComponents[category];
            const Icon = iconComponents[category];
            return (
              <Stack gap={2} className="note-list-item pink-hover" direction="horizontal">
                <Icon /><p className="note-name">{category} Notes</p>
              </Stack>
            )
          })
      }
      </Stack>
    </div>
  )
}

export default Notes;