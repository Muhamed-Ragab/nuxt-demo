<template>
  <div class="relative space-y-16">
    <div
      class="absolute left-0 top-0 h-3/4 w-full rounded-2xl bg-gradient-to-r from-[#65B946] to-[#2563EB] opacity-20 blur-[180px] sm:blur-[400px]"
    ></div>

    <section class="container relative z-10 py-16 text-center">
      <article class="mt-8 space-y-8">
        <div class="text-3xl font-bold text-primary sm:text-5xl">
          <h1>Do you need a digital</h1>
          <span
            class="bg-gradient-to-r from-[#65B946] to-[#2563EB] bg-clip-text text-3xl text-transparent sm:text-5xl"
          >
            Business card?
          </span>
        </div>

        <p class="text-xl font-bold sm:text-4xl">
          Let BisConnect <span class="text-alert sm:text-5xl">AI</span> Design
          Your Card
        </p>

        <div class="space-y-4 py-4">
          <Button size="lg" class="h-[56px] w-[281px] rounded-lg py-6 text-2xl"
            >Start now</Button
          >
          <p class="text-xl text-text">No cost, no limits, always free!</p>
        </div>
      </article>
    </section>

    <p class="mx-auto max-w-lg text-center text-xl text-textTwo">
      Let’s explore the concept of competitive advantage and how it contributes
      to business success.
    </p>

    <div>
      <Carousel
        class="relative mx-auto"
        :opts="{
          align: 'start',
          startIndex: 1,
        }"
      >
        <CarouselContent class="items-center">
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <div
              class="mx-auto h-[156px] w-[273px] rounded-lg border bg-section shadow-lg"
            ></div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <div
              class="mx-auto h-[156px] w-[273px] rounded-lg border bg-section shadow-lg"
            ></div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <div
              class="mx-auto h-[156px] w-[273px] rounded-lg border bg-section shadow-lg"
            ></div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>

    <img src="~/assets/images/outlet.svg" alt="outlet" class="lg:w-[650px]" />
  </div>
</template>
