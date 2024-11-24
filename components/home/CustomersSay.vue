<template>
  <section class="container space-y-16 py-16">
    <h2 class="text-center text-5xl font-bold text-text">What Customers Say</h2>

    <div class="px-8">
      <Carousel
        class="relative mx-auto max-w-5xl"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="items-center">
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <div class="h-[556px]">
              <video
                src="~/assets/videos/1.mp4"
                class="h-full w-full"
                controls
              ></video>
            </div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <div class="h-[556px]">
              <video
                src="~/assets/videos/2.mp4"
                class="h-full w-full"
                controls
              ></video>
            </div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <div class="h-[556px]">
              <video
                src="~/assets/videos/3.mp4"
                class="h-full w-full"
                controls
              ></video>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div class="max-md:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  </section>
</template>
