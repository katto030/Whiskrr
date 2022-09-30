import React from "react";
import { GiHighGrass } from 'react-icons/gi';
import { TbScaleOutline, TbMeat, TbNotes } from 'react-icons/tb';
import { FaRegCommentDots } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';

const Notes = () => {
  return (
    <div>
      <h5>Notes</h5>
      <Stack gap={4}>
        <Stack gap={2} className="note-list-item pink-hover" direction="horizontal">
          <GiHighGrass /><p className="note-name">Potty Notes</p>
        </Stack>

        <Stack gap={2} className="note-list-item pink-hover" direction="horizontal">
          <TbScaleOutline /><p className="note-name">Weight Notes</p>
        </Stack>

        <Stack gap={2} className="note-list-item pink-hover" direction="horizontal">
          <TbMeat /><p className="note-name">Appetite Notes</p>
        </Stack>

        <Stack gap={2} className="note-list-item pink-hover" direction="horizontal">
          <TbNotes /><p className="note-name">Behavior Notes</p>
        </Stack>

        <Stack gap={2} className="note-list-item pink-hover" direction="horizontal">
          <FaRegCommentDots /><p className="note-name">Other Notes</p>
        </Stack>
      </Stack>
    </div>
  )
}

export default Notes;