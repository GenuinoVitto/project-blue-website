export { default as AboutFour } from '../..\\components\\AboutFour.vue'
export { default as AboutOne } from '../..\\components\\AboutOne.vue'
export { default as AboutThree } from '../..\\components\\AboutThree.vue'
export { default as AboutTwo } from '../..\\components\\AboutTwo.vue'
export { default as BecomeVolunteerForm } from '../..\\components\\BecomeVolunteerForm.vue'
export { default as CallToActionOne } from '../..\\components\\CallToActionOne.vue'
export { default as CallToActionTwo } from '../..\\components\\CallToActionTwo.vue'
export { default as CausesCard } from '../..\\components\\CausesCard.vue'
export { default as CausesCarousel } from '../..\\components\\CausesCarousel.vue'
export { default as CausesCarouselThree } from '../..\\components\\CausesCarouselThree.vue'
export { default as CausesCarouselTwo } from '../..\\components\\CausesCarouselTwo.vue'
export { default as CausesGrid } from '../..\\components\\CausesGrid.vue'
export { default as CausesPost } from '../..\\components\\CausesPost.vue'
export { default as CausesSidebar } from '../..\\components\\CausesSidebar.vue'
export { default as CausesSingle } from '../..\\components\\CausesSingle.vue'
export { default as ContactHome } from '../..\\components\\ContactHome.vue'
export { default as ContactPageForm } from '../..\\components\\ContactPageForm.vue'
export { default as DailyUpdates } from '../..\\components\\DailyUpdates.vue'
export { default as EventCard } from '../..\\components\\EventCard.vue'
export { default as EventCarousel } from '../..\\components\\EventCarousel.vue'
export { default as EventsGrid } from '../..\\components\\EventsGrid.vue'
export { default as EventSingle } from '../..\\components\\EventSingle.vue'
export { default as FeatureOne } from '../..\\components\\FeatureOne.vue'
export { default as FeatureThree } from '../..\\components\\FeatureThree.vue'
export { default as FeatureTwo } from '../..\\components\\FeatureTwo.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as FunfactOne } from '../..\\components\\FunfactOne.vue'
export { default as GalleryCard } from '../..\\components\\GalleryCard.vue'
export { default as GalleryCarousel } from '../..\\components\\GalleryCarousel.vue'
export { default as GalleryGrid } from '../..\\components\\GalleryGrid.vue'
export { default as GoogleMap } from '../..\\components\\GoogleMap.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HeaderThree } from '../..\\components\\HeaderThree.vue'
export { default as HeaderTwo } from '../..\\components\\HeaderTwo.vue'
export { default as MainSliderCounter } from '../..\\components\\MainSliderCounter.vue'
export { default as MainSliderOne } from '../..\\components\\MainSliderOne.vue'
export { default as MainSliderThree } from '../..\\components\\MainSliderThree.vue'
export { default as MainSliderTwo } from '../..\\components\\MainSliderTwo.vue'
export { default as MobileDrawer } from '../..\\components\\MobileDrawer.vue'
export { default as NeedHelp } from '../..\\components\\NeedHelp.vue'
export { default as NewsCard } from '../..\\components\\NewsCard.vue'
export { default as NewsGrid } from '../..\\components\\NewsGrid.vue'
export { default as NewsHome } from '../..\\components\\NewsHome.vue'
export { default as NewsHomeThree } from '../..\\components\\NewsHomeThree.vue'
export { default as NewsHomeTwo } from '../..\\components\\NewsHomeTwo.vue'
export { default as NewsSidebar } from '../..\\components\\NewsSidebar.vue'
export { default as NewsSingle } from '../..\\components\\NewsSingle.vue'
export { default as PageHeader } from '../..\\components\\PageHeader.vue'
export { default as Post } from '../..\\components\\Post.vue'
export { default as PostAuthor } from '../..\\components\\PostAuthor.vue'
export { default as PostComments } from '../..\\components\\PostComments.vue'
export { default as QuestionAnswer } from '../..\\components\\QuestionAnswer.vue'
export { default as SearchPopup } from '../..\\components\\SearchPopup.vue'
export { default as SectionTitle } from '../..\\components\\SectionTitle.vue'
export { default as SponsorsOne } from '../..\\components\\SponsorsOne.vue'
export { default as TestimonialsCard } from '../..\\components\\TestimonialsCard.vue'
export { default as TestimonialsCarouselOne } from '../..\\components\\TestimonialsCarouselOne.vue'
export { default as TestimonialsGridOne } from '../..\\components\\TestimonialsGridOne.vue'
export { default as ThreeBoxes } from '../..\\components\\ThreeBoxes.vue'
export { default as VideoOne } from '../..\\components\\VideoOne.vue'
export { default as VolunteerAbout } from '../..\\components\\VolunteerAbout.vue'
export { default as VolunteerCard } from '../..\\components\\VolunteerCard.vue'
export { default as VolunteerGrid } from '../..\\components\\VolunteerGrid.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
