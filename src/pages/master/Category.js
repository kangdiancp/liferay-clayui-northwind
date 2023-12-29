import React, { useState } from 'react';
import ClayForm, { ClayInput } from '@clayui/form';

export default function Category() {
    const [active, setActive] = useState(false);
    return (
        <ClayForm>
            <ClayForm.Group className="form-group-sm">
                <label htmlFor="basicInput">Name</label>
                <ClayInput placeholder="Name" type="text"></ClayInput>
            </ClayForm.Group>
            <ClayForm.Group className="form-group-sm">
                <label htmlFor="basicInput">Description</label>
                <textarea className="form-control" placeholder="Description"></textarea>
            </ClayForm.Group>
        </ClayForm>
    )
}
