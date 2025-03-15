import { defineStore } from 'pinia'

export const useTextToVideoStore = defineStore('textToVideoStore', {
  state: () => ({
    videoName: '',
    videoScript: `Effective communication drives success in any team. Here’s how you can master it.



1. Start with Clarity.

State your purpose clearly from the beginning. Avoid ambiguity to keep everyone aligned



2. Listen Actively.

Focus on what others are saying. Respond thoughtfully, not just to reply.



3. Keep It Concise.

Get to the point quickly. Respect everyone’s time.



4. Use Visual Aids.

Enhance your message with charts, graphs, or slides. It makes complex ideas easier to understand.



5. Adapt Your Style.

Tailor your communication to your audience. What works for one group may not work for another.



6. Encourage Feedback.

Make it easy for others to share their thoughts. Open dialogue leads to better solutions.



7. Be Transparent.

Share relevant information openly. It builds trust and reduces misunderstandings.



8. Practice Empathy.

Understand and consider the emotions of your team members. It fosters a positive environment.



9. Follow Up.
After meetings or decisions, follow up to ensure everyone is on the same page.



10. Continuously Improve.

Regularly review your communication methods. Adapt and refine based on feedback.



Effective communication is the backbone of a successful consulting team. Implement these tips to ensure your message is not only heard but understood.
` as string
  }),
  getters: {
    videoScriptCharactersCount(): number {
      return this.videoScript?.length
    },

    videoScenes(): string[] {
      const blocks = this.videoScript.split('\n')
      // remove empty lines
      const scenes = blocks.filter((block) => block.trim() !== '')
      return scenes
    },

    videoScenesCount(): number {
      return this.videoScenes.length
    }
  },
  actions: {}
})
