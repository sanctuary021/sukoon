// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="ph ph-${list.icon} listIcon"></i>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[0].link}"
          class="listItem"
          >${list.links[0].name}</a>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[1].link}"
          class="listItem"
          >${list.links[1].name}</a>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[2].link}"
          class="listItem"
          >${list.links[2].name}</a>
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[3].link}"
          class="listItem"
          >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="ph ph-${list.icon} listIcon"></i>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[0].link}"
        class="listItem"
        >${list.links[0].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[1].link}"
        class="listItem"
        >${list.links[1].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[2].link}"
        class="listItem"
        >${list.links[2].name}</a>
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[3].link}"
        class="listItem"
        >${list.links[3].name}</a>
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.layout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();
