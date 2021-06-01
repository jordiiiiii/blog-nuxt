<template>
  <nav class="nav">
    <div class="logo">
      <NuxtLink :to="{ name: 'index' }" class="logo text-lg">
        Grail CyberTech
      </NuxtLink>

      <span class="subheader"> Dissenyat per Jordi GN </span>
    </div>
    <div class="nav-content">
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <NuxtLink :to="item.to">{{ item.title }} </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheFuster',
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: { name: 'index' },
        },
        {
          title: 'Product',
          to: { name: 'product' },
        },
        {
          title: 'Company',
          to: { name: 'company' },
        },
        {
          title: 'Partners',
          to: { name: 'partners' },
        },
        {
          title: 'Blog',
          to: { name: 'posts' },
        },
        {
          title: 'Contact Us',
          to: { name: 'contactUs' },
        },
      ],
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
  font-weight: lighter;
  letter-spacing: 0.5px;
  background: var(--navy);
}
.nav .logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav .logo .subheader {
  opacity: 0.7;
  font-size: 0.9rem;
  color: white;
}
.nav .nav-content {
  font-size: 1rem;
}
.nav-content ul {
  display: flex;
  list-style: none;
}
.nav-content ul li {
  padding: 2px 10px;
}
.nav-content ul li:not(:first-of-type) {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.nav-content ul li NuxtLink {
  padding: 2px 10px;
}
.nav-content ul li NuxtLink:not(:first-of-type) {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
