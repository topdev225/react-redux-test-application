import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const EditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditForm" onSubmit={props.editAction}>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">{props.expenseData._id?"Edit Extense":""}</h2>
          <FormGroup>
            <ControlLabel>Title: </ControlLabel>
            <input type="hidden" value={props.expenseData._id} name="id"  />
            <FormControl
              type="text" placeholder="Enter Title" className="toms"
              name="title" defaultValue={props.expenseData.title} required
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Amount: </ControlLabel>
            <FormControl
              type="number" placeholder="Enter Amount"
              name="amount" defaultValue={props.expenseData.amount} required
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Enter description"
              name="description" defaultValue={props.expenseData.description} required
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Status: </ControlLabel>
            <FormControl
              componentClass="select" placeholder="In"
              name="status" defaultValue={props.expenseData.status} 
            >
              <option value="0">In</option>
              <option value="1">Out</option>
            </FormControl>
          </FormGroup>
        </div>
        {/* <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Auther: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter auther name"
              name="auther" defaultValue={props.expenseData.username} required
            />
          </FormGroup>
        </div> */}
      </div>
      <FormGroup>
        <Button  type="submit" bsStyle="success" bsSize="large" block >Submit</Button>
      </FormGroup>
    </form>
  );
}

export default EditForm;
