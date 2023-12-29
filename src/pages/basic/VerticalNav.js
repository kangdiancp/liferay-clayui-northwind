import React from 'react'
import {ClayVerticalNav} from '@clayui/nav';

export default function VerticalNav() {
  return (
    <ClayVerticalNav
      active="6"
      defaultExpandedKeys={new Set(["5"])}
      items={[
        {
          id: "1",
          items: [
            {
              id: "2",
              href: "#nested1",
              label: "Nested1"
            }
          ],
          label: "Home"
        },
        {
          id: "3",
          href: "#2",
          label: "About"
        },
        {
          id: "4",
          href: "#3",
          label: "Contact"
        },
        {
          id: "5",
          items: [
            {
              id: "6",
              href: "#5",
              label: "Five"
            },
            {
              id: "7",
              href: "#6",
              label: "Six"
            }
          ],
          label: "Projects"
        },
        {
          id: "8",
          href: "#7",
          label: "Seven"
        }
      ]}
      large={false}
      spritemap={false}
    >
      {item => (
        <ClayVerticalNav.Item href={item.href} items={item.items} key={item.id}>
          {item.label}
        </ClayVerticalNav.Item>
      )}
    </ClayVerticalNav>
  )
}
