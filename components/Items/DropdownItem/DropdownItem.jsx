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
    noLinkTab.current.addEventListener("mouseenter", () => {
      noLinkTab.current.setAttribute("aria-expanded", "true");
    });
    noLinkTab.current.addEventListener("mouseout", () => {
      noLinkTab.current.setAttribute("aria-expanded", "false");
      setNoLinkTabIsOpen(false);
    });
    linkTab.current.addEventListener("mouseenter", () => {
      linkTab.current.setAttribute("aria-expanded", "true");
    });
    linkTab.current.addEventListener("mouseout", () => {
      linkTab.current.setAttribute("aria-expanded", "false");
      setLinkTabIsOpen(false);
    });
    const noLinkListChildren = Array.from(noLinkList.current.children);
    noLinkListChildren.map((child) => {
      let timer = null;
      child.firstChild.addEventListener("mouseenter", () => {
        noLinkTab.current.setAttribute("aria-expanded", "true");
        console.log(noLinkTab.current);
        setNoLinkTabIsOpen(true);
        if (timer) {
          clearTimeout(timer);
        }
      });
      child.firstChild.addEventListener("mouseout", () => {
        timer = setTimeout(() => {
          setNoLinkTabIsOpen(false);
          noLinkTab.current.setAttribute("aria-expanded", "false");
        }, 1000);
      });
    });

    const linkListChildren = Array.from(linkList.current.children);
    linkListChildren.map((child) => {
      let timer = null;
      child.firstChild.addEventListener("mouseenter", () => {
        linkTab.current.setAttribute("aria-expanded", "true");
        setLinkTabIsOpen(true);

        if (timer) {
          clearTimeout(timer);
        }
      });
      child.firstChild.addEventListener("mouseout", () => {
        timer = setTimeout(() => {
          setLinkTabIsOpen(false);
          linkTab.current.setAttribute("aria-expanded", "false");
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
      id="drop-down-item"
      name="Drop-down"
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
                alert("Du har klickat på en länk.");
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
              aria-expanded={noLinkTabIsOpen ? "true" : "false"}
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
                    alert("Du har klickat på en länk.");
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
                    alert("Du har klickat på en länk.");
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
                alert("Du har klickat på en länk.");
              }}
              className={styles.withButtonTab}
              aria-expanded={linkTabIsOpen ? "true" : "false"}
            >
              Link
            </a>
            <button
              className={styles.openMenuButton}
              onClick={toggleLinkTabIsOpen}
              name="öppna meny"
              aria-label="öppna meny"
            ></button>
            <ul
              ref={linkList}
              className={linkTabIsOpen ? styles.displayNoLinkList : ""}
            >
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Du har klickat på en länk.");
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
                    alert("Du har klickat på en länk.");
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
