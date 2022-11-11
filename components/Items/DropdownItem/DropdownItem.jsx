import ItemCard from "../../ItemCard/ItemCard";
import styles from "./DropdownItem.module.sass";
import DropdownItemText from "./DropdownItemText";
import { useEffect, useRef, useState } from "react";

export default function DropdownItem(itemList) {
  const noLinkTab = useRef(null);
  const linkTab = useRef(null);
  const noLinkList = useRef(null);
  const linkList = useRef(null);

  const [noLinkTabIsOpen, setNoLinkTabIsOpen] = useState(false);
  const [linkTabIsOpen, setLinkTabIsOpen] = useState(false);

  useEffect(() => {
    noLinkTab.current.addEventListener("click", (e) => {
      e.preventDefault();
    });
    noLinkTab.current.addEventListener("mouseout", () => {
      setNoLinkTabIsOpen(false);
    });
    linkTab.current.addEventListener("mouseout", () => {
      setLinkTabIsOpen(false);
    });
    const noLinkListChildren = Array.from(noLinkList.current.children);
    noLinkListChildren.map((child) => {
      let timer = null;
      child.firstChild.addEventListener("mouseenter", () => {
        setNoLinkTabIsOpen(true);
        if (timer) {
          clearTimeout(timer);
        }
      });
      child.firstChild.addEventListener("mouseout", () => {
        timer = setTimeout(() => {
          setNoLinkTabIsOpen(false);
        }, 1000);
      });
    });

    const linkListChildren = Array.from(linkList.current.children);
    linkListChildren.map((child) => {
      let timer = null;
      child.firstChild.addEventListener("mouseenter", () => {
        setLinkTabIsOpen(true);
        if (timer) {
          clearTimeout(timer);
        }
      });
      child.firstChild.addEventListener("mouseout", () => {
        timer = setTimeout(() => {
          setLinkTabIsOpen(false);
        }, 1000);
      });
    });
  }, []);

  const toggleNoLinkTabIsOpen = () => {
    setNoLinkTabIsOpen((current) => !current);
    if (!noLinkTabIsOpen) {
      setLinkTabIsOpen(false);
    }
  };

  const toggleLinkTabIsOpen = () => {
    setLinkTabIsOpen((current) => !current);

    if (!linkTabIsOpen) {
      setNoLinkTabIsOpen(false);
    }
  };

  return (
    <ItemCard
      id="dropdown-item"
      name="Dropdown"
      text={<DropdownItemText />}
      itemList={itemList}
    >
      <nav className={styles.navContainer}>
        <ul className={styles.parentList}>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("You clicked a link.");
              }}
            >
              No Drop-down
            </a>
          </li>
          <li>
            <a
              href="#"
              ref={noLinkTab}
              className={styles.noLinkTab}
              style={{ textDecoration: "none" }}
              onClick={toggleNoLinkTabIsOpen}
            >
              No Link
            </a>
            <ul
              ref={noLinkList}
              className={noLinkTabIsOpen ? styles.displayNoLinkList : ""}
            >
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("You clicked a link.");
                  }}
                >
                  Item 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("You clicked a link.");
                  }}
                >
                  Item 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              ref={linkTab}
              onClick={(e) => {
                e.preventDefault();
                alert("You clicked a link.");
              }}
              className={styles.withButtonTab}
            >
              Link
            </a>
            <button
              className={styles.openMenuButton}
              onClick={toggleLinkTabIsOpen}
            >
              v
            </button>
            <ul
              ref={linkList}
              className={linkTabIsOpen ? styles.displayNoLinkList : ""}
            >
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("You clicked a link.");
                  }}
                >
                  Item 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("You clicked a link.");
                  }}
                >
                  Item 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </ItemCard>
  );
}
