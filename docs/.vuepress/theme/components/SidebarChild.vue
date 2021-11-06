<script setup lang="js">
import { h } from 'vue';
import { useRoute } from 'vue-router';
import NavLink from './NavLink.vue';
const normalizePath = (path) => decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(md|html)$/, '');
const isActiveLink = (route, link) => {
    if (link === undefined) {
        return false;
    }
    if (route.hash === link) {
        return true;
    }
    const currentPath = normalizePath(route.path);
    const targetPath = normalizePath(link);
    return currentPath === targetPath;
};
const isActiveItem = (route, item) => {
    if (isActiveLink(route, item.link)) {
        return true;
    }
    if (item.children) {
        return item.children.some((child) => isActiveItem(route, child));
    }
    return false;
};
const renderItem = (item, props) => {
    // if the item has link, render it as `<NavLink>`
    if (item.link) {
        return h(NavLink, {
            ...props,
            item,
        });
    }
    // if the item only has text, render it as `<p>`
    return h('p', props, [h('span', {}, item.text)]);
};
const renderChildren = (item, depth) => {
    var _a;
    if (!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)) {
        return null;
    }
    return h('ul', {
        class: {
            'sidebar-group-items': depth == 0,
            'sidebar-sub-headers': depth > 0
        },
    }, item.children.map((child) => h('li', {
        class: {
            'sidebar-sub-header': depth > 0
        }
    }, h(SidebarChild, {
        item: child,
        depth: depth + 1,
    }))));
};

export const SidebarChild = ({ item, depth = 0 }) => {
    const route = useRoute();
    const active = isActiveItem(route, item);
    let renderedItem = renderItem(item, {
                class: {
                    'sidebar-heading': depth === 0,
                    'sidebar-link': true,
                    active,
                },
            });
    let renderedChildren = renderChildren(item, depth)

    if(depth == 0) {
        return h('div', {
            class: {
                'sidebar-group': depth == 0
                }
            }, [
                renderedItem,
                renderedChildren
            ]);
        }

    return [
        renderedItem,
        renderedChildren
    ];
};
SidebarChild.displayName = 'SidebarChild';
SidebarChild.props = {
    item: {
        type: Object,
        required: true,
    },
    depth: {
        type: Number,
        required: false,
    },
};

export default SidebarChild;
</script>
<style lang="scss">
@use '../styles/config' as *;

.span-new-update {
	position: absolute;
	right: 5px;
	background: $accentColor;
	color: #fff;
	font-size: 10px;
	font-weight: lighter !important;
	border-radius: 5px;
	padding-bottom: 2px;
	padding-left: 4px;
	padding-right: 4px;
	line-height: 15px;
	top: 50%;
	transform: translate(0, -50%);
	text-transform: capitalize;
}
.sidebar-sub-header {
	a {
		opacity: 1 !important;
	}
}
.sidebar {
	.sidebar-sub-headers {
		padding-left: 1rem;
		font-size: 0.95em;
		display: none;
	}
}
a {
	&.sidebar-link {
		position: relative;
		font-weight: 400;
		display: inline-block;
		color: $textColor;
		border-left: 0.25rem solid transparent;
		padding: 0.35rem 1rem 0.35rem 1.25rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			color: $accentColor;
			opacity: 1 !important;
		}
		&.active {
			font-weight: 600;
			color: $accentColor;
			border-left-color: $accentColor;
			opacity: 1 !important;
		}
	}
}
.sidebar-group {
	a {
		&.sidebar-link {
			padding-left: 2rem;
		}
	}
}
.sidebar-sub-headers {
	a {
		&.sidebar-link {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-left: none;
			&.active {
				font-weight: 500;
				opacity: 1 !important;
			}
		}
	}
}

//group
.sidebar-group {
	&:not(.first) {
		margin-top: 1em;
	}
	.sidebar-group {
		padding-left: 0.5em;
	}
	&:not(.collapsable) {
		.sidebar-heading {
			cursor: auto;
			color: inherit;
		}
	}
}
.sidebar-heading {
	color: #999;
	transition: color 0.15s ease;
	cursor: pointer;
	font-size: 1.1em;
	padding-left: 1.5rem;
	margin-top: 0;
	margin-bottom: 0.5rem;
	.arrow {
		position: relative;
		top: -0.12em;
		left: 0.5em;
	}
	&.open {
		.arrow {
			top: -0.18em;
		}
	}
}
.sidebar-heading.open,
.sidebar-heading:hover {
	color: inherit;
}
.sidebar-group-items {
	transition: height 0.1s ease-out;
	overflow: hidden;
}
//group map
.sidebar-group {
	&:not(.first) {
		margin-top: 1em;
	}
	.sidebar-group {
		padding-left: 0.5em;
	}
	&:not(.collapsable) {
		.sidebar-heading {
			cursor: auto;
			color: inherit;
		}
	}
}
.sidebar-heading {
	color: #999;
	transition: color 0.15s ease;
	cursor: pointer;
	font-size: 1.1em;
	padding-left: 1.5rem;
	margin-top: 0;
	margin-bottom: 0.5rem;
	.arrow {
		position: relative;
		top: -0.12em;
		left: 0.5em;
	}
	&.open {
		.arrow {
			top: -0.18em;
		}
	}
}
.sidebar-heading.open,
.sidebar-heading:hover {
	color: inherit;
}
.sidebar-group-items {
	transition: height 0.1s ease-out;
	overflow: hidden;
}

//link
.span-new-update {
	position: absolute;
	right: 5px;
	background: $accentColor;
	color: #fff;
	font-size: 10px;
	font-weight: lighter !important;
	border-radius: 5px;
	padding-bottom: 2px;
	padding-left: 4px;
	padding-right: 4px;
	line-height: 15px;
	top: 50%;
	transform: translate(0, -50%);
	text-transform: capitalize;
}
.sidebar-sub-header {
	a {
		opacity: 1 !important;
	}
}
.sidebar {
	.sidebar-sub-headers {
		padding-left: 1rem;
		font-size: 0.95em;
		display: none;
	}
}
a {
	&.sidebar-link {
		position: relative;
		font-weight: 400;
		display: inline-block;
		color: $textColor;
		border-left: 0.25rem solid transparent;
		padding: 0.35rem 1rem 0.35rem 1.25rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			color: $accentColor;
			opacity: 1 !important;
		}
		&.active {
			font-weight: 600;
			color: $accentColor;
			border-left-color: $accentColor;
			opacity: 1 !important;
		}
	}
}
.sidebar-group {
	a {
		&.sidebar-link {
			padding-left: 2rem;
		}
	}
}
.sidebar-sub-headers {
	a {
		&.sidebar-link {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-left: none;
			&.active {
				font-weight: 500;
				opacity: 1 !important;
			}
		}
	}
}

// link map
.sidebar-sub-header {
	a {
		opacity: 1 !important;
	}
}
.sidebar {
	.sidebar-sub-headers {
		padding-left: 1rem;
		font-size: 0.95em;
	}
}
a {
	&.sidebar-link {
		position: relative;
		font-weight: 400;
		display: inline-block;
		color: $textColor;
		border-left: 0.25rem solid transparent;
		padding: 0.35rem 1rem 0.35rem 1.25rem;
		line-height: 1.4;
		width: 100%;
		box-sizing: border-box;
		opacity: 0.7;
		transition: all 0.3s ease;
		&:hover {
			color: $accentColor;
			opacity: 1 !important;
		}
		&.active {
			font-weight: 600;
			color: $accentColor;
			border-left-color: $accentColor;
			opacity: 1 !important;
		}
	}
}
.sidebar-group {
	a {
		&.sidebar-link {
			padding-left: 2rem;
		}
	}
}
.sidebar-sub-headers {
	a {
		&.sidebar-link {
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
			border-left: none;
			&.active {
				font-weight: bold;
				opacity: 1 !important;
			}
		}
	}
}

//sidebar map
.no-sidebar {
	.sidebar-map {
		background: transparent;
	}
	.notiads {
		box-shadow: none;
	}
}
.sidebar-map {
	position: fixed;
	right: 0px;
	background-color: #fdfdfd;
	z-index: 1000;
	bottom: 0px;
	top: $navbarHeight;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	.sidebar-links-map {
		width: 7.5rem;
		.sidebar-group-items {
			& > li {
				& > a {
					display: none;
				}
			}
			.sidebar-link {
				&.active {
					border-left: 1px solid #000;
					color: #000;
					font-weight: bold;
				}
			}
		}
	}
	.con-carbon-noti {
		width: 9rem;
		position: relative;
		height: 100%;
	}
	ul {
		width: 100%;
		padding-left: 0px;
	}
	li {
		list-style: none;
		position: relative;
		display: block;
		.sidebar-link {
			padding: 5px;
			padding-left: 10px;
			font-size: 0.7rem;
		}
	}
	.sidebar-group {
		margin-top: 0px;
		.sidebar-group-items {
			padding-top: 0px;
			padding-bottom: 0px;
		}
	}
}

@media only screen and (max-width: 1100px) {
    .notiads {
        .btn-patreon {
            display: none !important;
        }
    }
    .c-sidebar-map {
        display: none;
    }
    .sidebar {
        .sidebar-sub-headers {
            display: block !important;
        }
    }
    .page {
        width: 100%;
        padding-right: 0px !important;
    }
    .sidebar-map {
        width: calc(100% - $sidebarWidth);
        height: 140px;
        position: relative;
        margin-left: $sidebarWidth;
        .notiads {
            box-shadow: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.03);
            padding-left: 30px;
            box-shadow: none !important;
            border-bottom: 1px solid rgba(0,0,0,0);
        }
    }
    .carbon {
        margin-bottom: 0px !important;
        width: 330px;
        .carbon-wrap {
            display: flex;
            .carbon-text {
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: left;
            }
        }
        .carbon-img {
            img {
                width: auto !important;
            }
        }
    }
    .con-carbon-noti {
        width: 100% !important;
        .notiads {
            flex-direction: row;
        }
        .sponsor-special {
            margin-left: 10px;
            width: auto !important;
            padding: 0px !important;
            h4 {
                display: none;
            }
        }
    }
    .no-sidebar {
        .sidebar-map {
            .notiads {
                padding-left: 30px;
                box-shadow: none !important;
                border-bottom: 1px solid rgba(0,0,0,0);
            }
        }
        .carbon {
            margin-bottom: 0px !important;
            width: 330px;
            .carbon-wrap {
                display: flex;
                .carbon-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: left;
                }
            }
            .carbon-img {
                img {
                    width: auto !important;
                }
            }
        }
        .con-carbon-noti {
            width: 100%;
            .notiads {
                flex-direction: row;
            }
            .sponsor-special {
                margin-left: 10px;
                width: auto !important;
                padding: 0px !important;
                h4 {
                    display: none;
                }
            }
        }
        .c-sidebar-map {
            display: none;
        }
    }
}

@media only screen and (max-width: 400px) {
  .sidebar-map {
        height: auto;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .notiads {
        position: relative;
        display: block;
        .sponsor-special {
            display: none;
        }
        .carbon {
            width: 100%;
            margin-top: 5px;
            img {
                max-width: 100px !important;
            }
        }
    }
}


</style>
